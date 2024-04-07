import java.util.Scanner;

class DMart {
        public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                float ap, dp, total;
                System.out.println("Enter the name");
                String name = sc.nextLine();
                System.out.println("Enter your Gender  F/M");
                char gender = sc.next().charAt(0);
                System.out.println("Enter the quantity of Item1");
                float quantity1 = sc.nextFloat();
                System.out.println("Enter the quantity of Item2");
                float quantity2 = sc.nextFloat();
                System.out.println("Enter the quantity of Item3");
                float quantity3 = sc.nextFloat();
                System.out.println("Enter the quantity of Item4");
                float quantity4 = sc.nextFloat();
                System.out.println("Enter the quantity of Item5");
                float quantity5 = sc.nextFloat();
                System.out.println("Enter the quantity of Item6");
                float quantity6 = sc.nextFloat();
                System.out.println("Enter the quantity of Item7");
                float quantity7 = sc.nextFloat();
                System.out.println("Enter the quantity of Item8");
                float quantity8 = sc.nextFloat();
                System.out.println("Enter the quantity of Item9");
                float quantity9 = sc.nextFloat();
                System.out.println("Enter the quantity of Item10");
                float quantity10 = sc.nextFloat();
                System.out.println("Do you want carry beg  Y/N");
                char carryBeg = sc.next().charAt(0);
                System.out.println("                             D-Mart");
                System.out.println("Name : " + name + "\t\t\t\t\tDate :  09/06/2023");
                System.out.println("------------------------------------------------------------------------------");
                System.out.println("Item Name      Quantity        Price           Total               After-Discount");
                if (quantity1 > 4) {
                        System.out.println(
                                        "Item1 \t\t" + quantity1 + "\t\t10\t\t" + (quantity1 * 10) + " Rs\t\t\t"
                                                        + ((quantity1 * 10) - ((quantity1 * 10) * 5 / 100)) + " Rs");
                       
                       
                                                        System.out.println(
                                        "Item2 \t\t" + quantity2 + "\t\t20\t\t" + (quantity2 * 20) + " Rs\t\t\t"
                                                        + (quantity2 * 20) + " Rs");
                        System.out.println(
                                        "Item3 \t\t" + quantity3 + "\t\t30\t\t" + (quantity3 * 30) + " Rs\t\t"
                                                        + (quantity3 * 30) + " Rs");
                        System.out.println(
                                        "Item4 \t\t" + quantity4 + "\t\t40\t\t" + (quantity4 * 40) + " Rs\t\t"
                                                        + (quantity4 * 40) + " Rs");
                        System.out.println("Item5 \t\t" + quantity5 + "\t\t50\t\t" + (quantity5 * 50) + " Rs\t\t"
                                        + ((quantity5 * 50 - ((quantity5 * 50) * 10 / 100)) + " Rs"));
                        System.out.println(
                                        "Item6 \t\t" + quantity6 + "\t\t60\t\t" + (quantity6 * 60) + " Rs\t\t"
                                                        + (quantity6 * 60) + " Rs");
                        System.out.println(
                                        "Item7 \t\t" + quantity7 + "\t\t70\t\t" + (quantity7 * 70) + " Rs\t\t"
                                                        + (quantity7 * 70) + " Rs");
                        System.out.println(
                                        "Item8 \t\t" + quantity8 + "\t\t80\t\t" + (quantity8 * 80) + " RS\t\t"
                                                        + (quantity8 * 80) + " Rs");
                        System.out.println(
                                        "Item9 \t\t" + quantity9 + "\t\t90\t\t" + (quantity9 * 90) + " Rs\t\t"
                                                        + (quantity9 * 90) + " Rs");
                        System.out.println("Item10 \t\t" + quantity10 + "\t\t100\t\t" + (quantity10 * 100) + " Rs\t\t"
                                        + ((quantity10 * 100) - ((quantity10 * 100) * 15 / 100)) + " Rs");
                        System.out.println(
                                        "-----------------------------------------------------------------------------------");
                        ap = ((quantity1 * 10) + (quantity2 * 20) + (quantity3 * 30) + (quantity4 *
                                        40) + (quantity5 * 50)
                                        + (quantity6 * 60) + (quantity7 * 70) + (quantity8 * 80) + (quantity9 * 90) +
                                        (quantity10 * 100));
                        dp = (((quantity1 * 10) - ((quantity1 * 10) * 5 / 100)) + (quantity2 * 20) +
                                        (quantity3 * 30)
                                        + (quantity4 * 40)
                                        + ((quantity5 * 50 - ((quantity5 * 50) * 10 / 100)) + (quantity6 * 60) +
                                                        (quantity7 * 70)
                                                        + (quantity8 * 80) + (quantity9 * 90)
                                                        + ((quantity10 * 100) - ((quantity10 * 100) * 15 / 100))));
                        if (dp > 10000) {
                                float g = dp * (15 / 100);
                                dp = dp - g;
                                System.out.println(" \t\t\t\t\t\t A.P.\t\t\tD.P.");
                        } else if (500 < dp && dp < 10000) {
                                float g = dp * (10 / 100);
                                dp = dp - g;
                                System.out.println(" \t\t\t\t\t\t A.P.\t\t\tD.P.");

                        }
                        System.out.println("\t\t\t\t\t\t" + ap + "\t\t\t" + dp);
                        if (dp > 10000)
                                total = dp * (15 / 100);
                        else if (dp > 5000 && dp < 10000)
                                total = dp * (10 / 100);
                        if (gender == 'F')
                                System.out.println("Gift :- Cadeberry \t\t\t\t0.00\t\t\t 0.00");
                        else if (gender == 'M')
                                System.out.println("Gift :- Ladger Wallet\t\t\t\t 0.00\t\t\t 0.00");

                        if (carryBeg == 'Y') {
                                System.out.println("Carry Bag : yes                   \t\t10:00 \t\t       10:00");
                                System.out.println(
                                                "GST(10% )" + "\t\t\t\t\t" + (ap * (10 / 100.f)) + "\t\t\t"
                                                                + (dp * (10 / 100.f)));
                                System.out.println(
                                                "--------------------------------------------------------------------------------------");

                                System.out.println("\t\t\t\t\t\t" + (ap + (ap * (10 / 100.f)) + 10) + "\t\t\t"
                                                + (dp + (dp * (10 / 100.f)) + 10) + "\n\n");
                        } else {
                                System.out.println("Carry Bag : No                    \t\t0:00 \t\t	  00:00");
                                System.out.println(
                                                "GST(10% )" + "\t\t\t\t\t" + (ap * (10 / 100.f)) + "\t\t\t"
                                                                + (dp * (10 / 100.f)));
                                System.out.println(
                                                "--------------------------------------------------------------------------------------");
                                System.out.println("\t\t\t\t\t\t" + (ap + (ap * (10 / 100.f))) + "\t\t\t"
                                                + (dp + (dp * (10 / 100.f))) + "\n\n");
                                System.out.println("\t\t\t\t\tThank You");
                                System.out.println("\t\t\t\t\tTo Visit");
                                System.out.println("\t\t\t\t\tD-Mart");
                        }
                } else {
                        System.out.println("Item1 \t\t" + quantity1 + "\t\t10\t\t" + (quantity1 * 10) + " Rs\t\t"
                                        + (quantity1 * 10) + " Rs");
                        System.out.println(
                                        "Item2 \t\t" + quantity2 + "\t\t20\t\t" + (quantity2 * 20) + " Rs\t\t"
                                                        + (quantity2 * 20) + " Rs");
                        System.out.println(
                                        "Item3 \t\t" + quantity3 + "\t\t30\t\t" + (quantity3 * 30) + " Rs\t\t"
                                                        + (quantity3 * 30) + " Rs");
                        System.out.println(
                                        "Item4 \t\t" + quantity4 + "\t\t40\t\t" + (quantity4 * 40) + " Rs\t\t"
                                                        + (quantity4 * 40) + " Rs");
                        System.out.println("Item5 \t\t" + quantity5 + "\t\t50\t\t" + (quantity5 * 50) + " Rs\t\t"
                                        + ((quantity5 * 50) * 10 / 100) + " Rs");
                        System.out.println(
                                        "Item6 \t\t" + quantity6 + "\t\t60\t\t" + (quantity6 * 60) + " Rs\t\t"
                                                        + (quantity6 * 60) + " Rs");
                        System.out.println(
                                        "Item7 \t\t" + quantity7 + "\t\t70\t\t" + (quantity7 * 70) + " Rs\t\t"
                                                        + (quantity7 * 70) + " Rs");
                        System.out.println(
                                        "Item8 \t\t" + quantity8 + "\t\t80\t\t" + (quantity8 * 80) + " RS\t\t"
                                                        + (quantity8 * 80) + " Rs");
                        System.out.println(
                                        "Item9 \t\t" + quantity9 + "\t\t90\t\t" + (quantity9 * 90) + " Rs\t\t"
                                                        + (quantity9 * 90) + " Rs");
                        System.out.println("Item10 \t\t" + quantity10 + "\t\t100\t\t" + (quantity10 * 100) + " Rs\t\t"
                                        + ((quantity10 * 100) - ((quantity10 * 100) * 15 / 100)) + " Rs");
                        System.out.println(
                                        "-----------------------------------------------------------------------------------------");
                        ap = ((quantity1 * 10) + (quantity2 * 20) + (quantity3 * 30) + (quantity4 * 40)
                                        + (quantity5 * 50)
                                        + (quantity6 * 60) + (quantity7 * 70) + (quantity8 * 80) + (quantity9 * 90)
                                        + (quantity10 * 100));
                        dp = ((quantity1 * 10) + (quantity2 * 20) + (quantity3 * 30) + (quantity4 * 40)
                                        + ((quantity5 * 50) - ((quantity5 * 50) * 10 / 100)) + (quantity6 * 60)
                                        + (quantity7 * 70)
                                        + (quantity8 * 80)
                                        + (quantity9 * 90)
                                        + ((quantity10 * 100) - ((quantity10 * 100) * 15 / 100)));
                        if (dp > 10000) {
                                float g = dp * (15 / 100);
                                dp = dp - g;
                                System.out.println(" \t\t\t\t\t\t A.P.\t\t\tD.P.");
                        } else if (500 < dp && dp < 10000) {
                                float g = dp * (10 / 100);
                                dp = dp - g;
                                System.out.println(" \t\t\t\t\t\t A.P.\t\t\tD.P.");
                        }
                        System.out.println("\t\t\t\t\t\t" + ap + "\t\t\t" + dp);
                        if (gender == 'F')
                                System.out.println("Gift :- Cadeberry \t\t\t\t0.00\t\t\t 0.00");
                        else if (gender == 'M')
                                System.out.println("Gift :- Ladger Wallet\t\t\t\t 0.00\t\t\t 0.00");

                        if (carryBeg == 'Y') {
                                System.out.println("Carry Bag : yes                   \t\t10:00 \t\t       10:00");
                                System.out.println(
                                                "GST(10% )" + "\t\t\t\t\t" + (ap * (10 / 100.f)) + "\t\t\t"
                                                                + (dp * (10 / 100.f)));
                                System.out.println(
                                                "--------------------------------------------------------------------------------------");

                                System.out.println("\t\t\t\t\t\t" + (ap + (ap * (10 / 100.f)) + 10) + "\t\t\t"
                                                + (dp + (dp * (10 / 100.f)) + 10) + "\n\n");
                        } else {
                                System.out.println("Carry Bag : No                    \t\t0:00 \t\t	  00:00");
                                System.out.println(
                                                "GST(10% )" + "\t\t\t\t\t" + (ap * (10 / 100.f)) + "\t\t\t"
                                                                + (dp * (10 / 100.f)));
                                System.out.println(
                                                "--------------------------------------------------------------------------------------");

                                System.out.println("\t\t\t\t\t\t" + (ap + (ap * (10 / 100.f))) + "\t\t\t"
                                                + (dp + (dp * (10 / 100.f))) + "\n\n");
                        }
                        System.out.println("\t\t\t\t\tThank You");
                        System.out.println("\t\t\t\t\tTo Visit");
                        System.out.println("\t\t\t\t\tD-Mart");
            }
  }
}
