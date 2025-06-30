// tests/appointmentForm.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppointmentForm from "@/components/forms/AppointmentForm";


const mockPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock("/lib/actions/appointment.actions", () => ({
  createAppointment: jest.fn(),
  getAppointment: jest.fn(),
}));

jest.mock("/lib/appwriteClient",()=>({
    default : jest.fn()
}))

describe("AppointmentForm", () => {
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
});
