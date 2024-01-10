import { render, screen } from "@testing-library/react-native";
import HomeScreen from "./HomeScreen";

test("Show welcome message", async () => {
  render(<HomeScreen />);
  const textElement = await screen.getByText("Users", { exact: false });
  expect(textElement.children).toContain("Users");
});