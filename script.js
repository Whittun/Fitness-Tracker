const addButton = document.querySelector('.exercise__add-button');
const closeButton = document.querySelector('.exercise__close-button');
const overButton = document.querySelector('.exercise__over-button');
const reportList = document.querySelector('.report__list');
const exerciseWrapper = document.querySelector('.exercise-wrapper');
const saveButton = document.querySelector('.exercise__save-button');
const numberWrapper = document.querySelector('.number-wrapper');
const statistic = document.querySelector('.statistic');
const exerciseField = document.getElementById('exercise-field');
const amountField = document.getElementById('amount-field');


let count = 1;

function addExercise(value) {
    let addExercise = document.createElement('li');
    addExercise.className = 'report__item';
    addExercise.innerHTML = 'Упражнение: ' + '<span class="exercise-text">' + value + '</span>'; 
    reportList.append(addExercise);
}

function addAmountWrapper() {
    let AddWrapper = document.createElement('ul');
    AddWrapper.className = 'report__sub-list';
    let currentReportItem = reportList.lastElementChild;
    currentReportItem.append(AddWrapper);
}

function addAmount(value) {
    let AddAmount = document.createElement('li');
    AddAmount.className = 'report__sub-item'
    AddAmount.innerHTML = `<span class="count">Подход ${count++}: </span>` +
                          '<span class="number">'+ value + '</span>'; 

    let currentReportItem = reportList.lastElementChild;
    let currentWrapper = currentReportItem.lastElementChild;
    currentWrapper.append(AddAmount);
}

addButton.onclick = function() {
    if (exerciseField.value != '') {
        addExercise(exerciseField.value);
        exerciseField.value = '';

        exerciseWrapper.style.display = 'none';
        numberWrapper.style.display = 'block';

        saveButton.style.display = 'block';
    }

    if (amountField.value != '' && reportList.lastElementChild) {
        let currentReportItem = reportList.lastElementChild;
        let currentWrapper = currentReportItem.lastElementChild;
        if (!currentWrapper) {
            addAmountWrapper();
        }
        addAmount(amountField.value);
        amountField.value = '';
    }
};

closeButton.onclick = function() {
    exerciseWrapper.style.display = 'block';
    numberWrapper.style.display = 'none';
    amountField.value = '';
    count = 1;
}

saveButton.onclick = function() {
    if (reportList.innerHTML != '') {
        cloneList = reportList.cloneNode(true);
        statistic.append(cloneList);
    }
    reportList.innerHTML = '';
    saveButton.style.display = 'none';
    statistic.style.display = 'block';
    exerciseWrapper.style.display = 'block';
    numberWrapper.style.display = 'none';
}