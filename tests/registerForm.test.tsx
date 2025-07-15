import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegisterForm from "@/components/forms/RegisterForm";
import userEvent from "@testing-library/user-event";

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));

const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// Mock the Appwrite client
jest.mock("@/lib/appwriteClient", () => ({
  account: {
    create: jest.fn(),
    createEmailSession: jest.fn(),
  },
  databases: {
    createDocument: jest.fn(),
  },
}));

jest.mock("@/lib/actions/patient.actions", () => ({
  registerPatient: jest.fn(() => Promise.resolve({ $id: "patient123" })),
}));

describe("RegisterForm", () => {
    const mockUser = {
        $id: "user123",
        name: "Test User",
        email: "test@example.com",
        password: "password123"
    }

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders the form with correct header and subHeader", () => {
        render(<RegisterForm user={mockUser}/>)

        expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
        expect(screen.getByText(/Let us know more about yourself./i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/John Doe/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/xyz@gmail.com/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Get Started/i })).toBeInTheDocument();
    })
})