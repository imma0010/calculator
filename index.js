window.onload = function () {
    const keys = document.querySelector('.keys');
    const display = document.querySelector('.display');

    keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const displayedNum = display.textContent;
            const previousKeyType = keys.dataset.previousKeyType;

            if (!action) {
                if (displayedNum === '0' || previousKeyType === 'operator') {
                    display.textContent = keyContent;
                } else {
                    display.textContent = displayedNum + keyContent;
                }
                keys.dataset.previousKeyType = 'number';
            }

            if (
                action === '+' ||
                action === '-' ||
                action === '*' ||
                action === '/'
            ) {
                key.classList.add('is-depressed');
                keys.dataset.previousKeyType = 'operator';
                keys.dataset.firstValue = displayedNum;
                keys.dataset.operator = action;
            }

            if (action === 'decimal') {
                display.textContent = displayedNum + '.';
                keys.dataset.previousKeyType = 'decimal';
            }

            if (action === 'clear') {
                document.querySelector(".operator.is-depressed").classList.remove("is-depressed");
                display.textContent = 0;
                keys.dataset.previousKeyType = null;
            }

            if (action === '=') {
                const firstValue = keys.dataset.firstValue;
                const operator = keys.dataset.operator;
                const secondValue = displayedNum;

                display.textContent = calculate(firstValue, operator, secondValue);
                document.querySelector(".operator.is-depressed").classList.remove("is-depressed");
            }

            if (action === "backspace") {
                display.textContent = displayedNum.substring(0, displayedNum.length - 1);
            }
        }
    });

    const calculate = (n1, operator, n2) => {
        let result = '';

        if (operator === '+') {
            result = parseFloat(n1) + parseFloat(n2);
        } else if (operator === '-') {
            result = parseFloat(n1) - parseFloat(n2);
        } else if (operator === '*') {
            result = parseFloat(n1) * parseFloat(n2);
        } else if (operator === '/') {
            result = parseFloat(n1) / parseFloat(n2);
        }

        return result;
    };
}