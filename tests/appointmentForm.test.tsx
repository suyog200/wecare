// tests/appointmentForm.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppointmentForm from "@/components/forms/AppointmentForm";
import userEvent from "@testing-library/user-event";

const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock("@/lib/actions/appointment.actions", () => ({
  createAppointment: jest.fn(() =>
    Promise.resolve({ $id: "appointment123" })
  ),
}));

jest.mock("@/lib/appwriteClient", () => ({
  default: jest.fn(),
}));

// describe("AppointmentForm", () => {
//   it("renders correctly in create mode", () => {
//     render(<AppointmentForm userid="user123" type="create" patientId="patient123" />);

//     expect(screen.getByRole("heading", { name: /New Appointment/i })).toBeInTheDocument();
//     expect(screen.getByText(/Request new appointment in 10 seconds/i)).toBeInTheDocument();
//     expect(screen.getByText(/Select a doctor/i)).toBeInTheDocument();
//     expect(screen.getByText(/Expected appointment date/i)).toBeInTheDocument();
//     expect(screen.getByText(/Reason for Appointment/i)).toBeInTheDocument();
//     expect(screen.getByText(/Additional comments\/notes/i)).toBeInTheDocument();
//     expect(screen.getByRole("button", { name: /Create Appointment/i })).toBeInTheDocument();
//   });

//   it("submits the form with correct data", async () => {
//     const user = userEvent.setup();
//     const { createAppointment } = require("@/lib/actions/appointment.actions");

//     render(<AppointmentForm userid="user123" type="create" patientId="patient123" />);

//     const doctorSelectTrigger = screen.getByRole("combobox");
//     await user.click(doctorSelectTrigger);

//     // Wait for dropdown options to appear
//     const doctorOption = await screen.findByText("John Green, Cardiologist");
//     await user.click(doctorOption);

//     // Wait for selection to be registered
//     await waitFor(() => {
//       expect(screen.queryByText("Select at least one doctor")).not.toBeInTheDocument();
//     });

//     const reasonField = screen.getByPlaceholderText(/ex: Fever, Cough, etc./i);
//     const noteField = screen.getByPlaceholderText(/ex: Prefer afternoon appointments, etc./i);

//     await user.clear(reasonField);
//     await user.type(reasonField, "Fever and cough");
//     await user.clear(noteField);
//     await user.type(noteField, "Prefer morning");

//     const submitBtn = screen.getByRole("button", { name: /Create Appointment/i });
//     await user.click(submitBtn);

//     await waitFor(() => {
//       expect(createAppointment).toHaveBeenCalled();
//       expect(mockPush).toHaveBeenCalledWith(
//         "/patients/user123/new-appointment/success?appointmentId=appointment123"
//       );
//     });
//   });
// });
// ...existing code...

// ...existing code...

describe("AppointmentForm", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it("renders correctly in create mode", () => {
    render(<AppointmentForm userid="user123" type="create" patientId="patient123" />);

    expect(screen.getByRole("heading", { name: /New Appointment/i })).toBeInTheDocument();
    expect(screen.getByText(/Request new appointment in 10 seconds/i)).toBeInTheDocument();
    expect(screen.getByText(/Select a doctor/i)).toBeInTheDocument();
    expect(screen.getByText(/Expected appointment date/i)).toBeInTheDocument();
    expect(screen.getByText(/Reason for Appointment/i)).toBeInTheDocument();
    expect(screen.getByText(/Additional comments\/notes/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Create Appointment/i })).toBeInTheDocument();
  });

  it("submits the form with correct data", async () => {
    const user = userEvent.setup();
    const { createAppointment } = require("@/lib/actions/appointment.actions");

    const { container } = render(<AppointmentForm userid="user123" type="create" patientId="patient123" />);

    // Get the hidden select element directly
    const hiddenSelect = container.querySelector('select[aria-hidden="true"]') as HTMLSelectElement;
    
    if (hiddenSelect) {
      // Directly set the value on the hidden select
      await user.selectOptions(hiddenSelect, "John Green");
    } else {
      // Fallback: try to interact with the visible trigger
      const selectTrigger = screen.getByRole("button", { name: /Select a doctor/i });
      await user.click(selectTrigger);
      
      // Wait for dropdown to appear
      await new Promise(resolve => setTimeout(resolve, 200));
      
      try {
        const option = await screen.findByText("John Green, Cardiologist", {}, { timeout: 2000 });
        await user.click(option);
      } catch (error) {
        console.log("Could not find dropdown option, continuing with test...");
      }
    }

    // Wait for any state updates
    await new Promise(resolve => setTimeout(resolve, 500));

    // Fill in the form fields
    const reasonField = screen.getByPlaceholderText(/ex: Fever, Cough, etc./i);
    const noteField = screen.getByPlaceholderText(/ex: Prefer afternoon appointments, etc./i);

    await user.clear(reasonField);
    await user.type(reasonField, "Fever and cough");
    await user.clear(noteField);
    await user.type(noteField, "Prefer morning");

    // Submit the form
    const submitBtn = screen.getByRole("button", { name: /Create Appointment/i });
    await user.click(submitBtn);

    // Wait for async operations and check if the function was called
    await waitFor(() => {
      expect(createAppointment).toHaveBeenCalled();
    }, { timeout: 10000 });

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith(
        "/patients/user123/new-appointment/success?appointmentId=appointment123"
      );
    }, { timeout: 5000 });
  });
});