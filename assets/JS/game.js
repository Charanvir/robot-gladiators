var playerName = window.prompt("What is your robot's name");
var playerHealth = 20;
var playerAttack = 3;
var playerMoney = 10;


var enemyNames = [
    "Roborto",
    "Amy Android",
    "Robo Tumble"
];
var enemyHealth = 10;
var enemyAttack = 2;


var fight = function (enemyName) {

    while (playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to skip");

            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. GoodBye!");
                playerMoney = playerMoney - 10;
                console.log(playerName + " has " + playerMoney + " dollars remaining!")
                break
            }
        }

        // Subtract the value or playerAttack from the value of eneryHealth
        enemyHealth = enemyHealth - playerAttack;

        // Log the resulting message to the console
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        )

        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died")
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health remaining.")
        }

        // Subtract the value of eneryAttack from the value of playerHealth
        playerHealth = playerHealth - enemyAttack;

        // Log the resulting message to the console.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )

        // Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died")
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.")
        }
    }
};


for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 10;
    fight(pickedEnemyName);
}