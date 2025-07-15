import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import PatientForm from "@/components/forms/PatientForm";
import userEvent from "@testing-library/user-event";
import { createUser, loginUser } from "@/lib/actions/patient.actions";

const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock("@/lib/actions/patient.actions", () => ({
  createUser: jest.fn(),
  loginUser: jest.fn(),
}));

jest.mock("@/components/Toast", () => (props: any) => (
  <div>{props.message}</div>
));

describe("PatientForm (Signup, Login)", () => {
  it("renders the form with correct header and subHeader", () => {
    render(
      <PatientForm
        header="Create Account"
        subHeader="Sign up to get started"
        newUser={true}
      />
    );

    expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign up to get started/i)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/xyz@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/^\*{8}$/i)).toBeInTheDocument();
  });

  it("renders only email and password field for login", () => {
    render(
      <PatientForm header="Login" subHeader="Welcome back!" newUser={false} />
    );

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome back!/i)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/xyz@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/^\*{8}$/i)).toBeInTheDocument();

    expect(screen.queryByPlaceholderText(/John Doe/i)).not.toBeInTheDocument();
  });

  it("submits signup form and redirects to login if use is new", async () => {
    (createUser as jest.Mock).mockResolvedValue({ isNew: true });

    render(
      <PatientForm
        header="Create Account"
        subHeader="Sign up to get started"
        newUser={true}
      />
    );

    await userEvent.type(screen.getByPlaceholderText(/John Doe/i), "Suyog");
    await userEvent.type(
      screen.getByPlaceholderText(/xyz@gmail.com/i),
      "suyog@test.com"
    );
    await userEvent.type(
      screen.getByPlaceholderText(/^\*{8}$/i),
      "password123"
    );

    await userEvent.click(screen.getByRole("button", { name: /Get Started/i }));

    await waitFor(() => {
      expect(createUser).toHaveBeenCalledWith({
        name: "Suyog",
        email: "suyog@test.com",
        password: "password123",
      });
    });
  });

  it("shows error toast if user already exists", async () => {
    (createUser as jest.Mock).mockResolvedValue({
      isNew: false,
      message: "User with this email already exists.",
    });

    render(
      <PatientForm
        header="Create Account"
        subHeader="Sign up to get started"
        newUser={true}
      />
    );

    await userEvent.type(screen.getByPlaceholderText(/John Doe/i), "Suyog");
    await userEvent.type(
      screen.getByPlaceholderText(/xyz@gmail.com/i),
      "suyog@test.com"
    );
    await userEvent.type(
      screen.getByPlaceholderText(/^\*{8}$/i),
      "password123"
    );

    await userEvent.click(screen.getByRole("button", { name: /Get Started/i }));

    await expect(
      screen.findByText(/User with this email already exists./i)
    ).resolves.toBeInTheDocument();
  });

  it("Submits Login form and redirects to patient registration page", async () => {
    (loginUser as jest.Mock).mockResolvedValue({
      userId: "12345",
    })
    
    render(
      <PatientForm header="Login" subHeader="Welcome back!" newUser={false} />
    );

    await userEvent.type(screen.getByPlaceholderText(/xyz@gmail.com/i), "suyog@gmail.com");
    await userEvent.type(screen.getByPlaceholderText(/^\*{8}$/i), "password123");

    await userEvent.click(screen.getByRole("button", { name: /Get Started/i }));

    await waitFor(() => {
      expect(loginUser).toHaveBeenCalledWith({
        email: "suyog@gmail.com",
        password: "password123",
      })
    })

    expect(mockPush).toHaveBeenCalledWith("/patients/12345/register");
  })

  it("shows error toast if login fails", async () => {
    (loginUser as jest.Mock).mockResolvedValue(null);

    render(
      <PatientForm header="Login" subHeader="Welcome back!" newUser={false} />
    )

    await userEvent.type(screen.getByPlaceholderText(/xyz@gmail.com/i), "wrong@gmail.com");
    await userEvent.type(screen.getByPlaceholderText(/^\*{8}$/i), "wrongpassword");

    await userEvent.click(screen.getByRole("button", { name: /Get Started/i }));

    await expect(
      screen.findByText(/Invalid email or password./i)
    ).resolves.toBeInTheDocument();
  })

});
