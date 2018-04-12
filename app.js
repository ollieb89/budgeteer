// BUDGET CONTROLLER

var budgetController = (function() {
    
    // Some code

})();

// UI CONTROLLER

var UIController = (function() {

    // Function to read data from UI

    return {
        getInput: function() {
            return {
                type: document.querySelector('.add__type').value, // will be either inc or exp                   
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            };
        }
    };

})();

// GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        
        // 1. Get input data from field

        var input = UICtrl.getInput();
        console.log(input);

        // 2. Add item to budget controller

        // 3. Add the item to the UI

        // 4. Calculate budget

        // 5. Display budget
    
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }      
    });

})(budgetController, UIController);