import java.util.Scanner;

public class Clicker {

    private static int clicks = 0;
    private static int level = 1;
    private static int clicksPerSecond = 0;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("n--- MNSTRS ---");
            System.out.println("Level: " + level);
            System.out.println("Clicks: " + clicks);
            System.out.println("Clicks per second: " + clicksPerSecond);

            System.out.println("nActions:");
            System.out.println("1. Tap");
            System.out.println("2. Buy Clicks per second");
            System.out.println("3. Exit");

            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline character

            switch (choice) {
                case 1:
                    click();
                    break;
                case 2:
                    buyClicksPerSecond();
                    break;
                case 3:
                    System.out.println("Exiting game...");
                    System.exit(0);
                default:
                    System.out.println("Invalid choice.");
            }
        }
    }

    private static void click() {
        clicks++;
        checkLevelUp();
    }

    private static void buyClicksPerSecond() {
        if (clicks >= 11) { // Example price for buying clicks per second
            clicks -= 10;
            clicksPerSecond++;
            System.out.println("You bought 1 click per second! Your clicks per second: " + clicksPerSecond);
        } else {
            System.out.println("Not enough clicks to buy clicks per second!");
        }
    }

    private static void checkLevelUp() {
        if (clicks >= level * 10) {
            level++;
            System.out.println("Congratulations! You leveled up to level " + level + "!");
        }
    }
}