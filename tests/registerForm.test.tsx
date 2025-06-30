// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import RegisterForm from "@/components/forms/RegisterForm";
// import userEvent from "@testing-library/user-event";

// const mockPush = jest.fn();

// jest.mock("next/navigation", () => ({
//   useRouter: () => ({
//     push: mockPush,
//   }),
// }));

// describe("RegisterForm", () => {
//     const mockUser = {
//         $id: "user123",
//         name: "Test User",
//         email: "test@example.com",
//         password: "password123"
//     }

//     it("renders the form with correct header and subHeader", () => {
//         render(<RegisterForm user={mockUser}/>)

//         expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
//         expect(screen.getByText(/Let us know more about yourself./i)).toBeInTheDocument();
//         expect(screen.getByPlaceholderText(/John Doe/i)).toBeInTheDocument();
//         expect(screen.getByPlaceholderText(/xyz@gmail.com/i)).toBeInTheDocument();
//         expect(screen.getByRole("button", { name: /Get Started/i })).toBeInTheDocument();
//     })
// })