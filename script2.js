var total = 0;

        function addToTotal(price) {
            total += price;
            var priceOutputElement = document.getElementById('priceOutput');
            priceOutputElement.textContent = 'Общая цена: $' + total;
        }

        function resetTotal() {
            // Обнуляем общую сумму
            total = 0;

            // Получаем элемент вывода общей цены
            var priceOutputElement = document.getElementById('priceOutput');

            // Обновляем содержимое вывода общей цены
            priceOutputElement.textContent = 'Общая цена: $' + total;
        }