<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
    <style>
        .calculator {
            width: 200px;
            margin: 0 auto;
            text-align: center;
        }

        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
        }

        .btn {
            width: 48px;
            height: 48px;
            font-size: 20px;
            margin: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" disabled>
        <div>
            <button class="btn" onclick="clearDisplay()">C</button>
            <button class="btn" onclick="appendToDisplay('7')">7</button>
            <button class="btn" onclick="appendToDisplay('8')">8</button>
            <button class="btn" onclick="appendToDisplay('9')">9</button>
            <button class="btn" onclick="appendToDisplay('+')">+</button>
        </div>
        <div>
            <button class="btn" onclick="appendToDisplay('4')">4</button>
            <button class="btn" onclick="appendToDisplay('5')">5</button>
            <button class="btn" onclick="appendToDisplay('6')">6</button>
            <button class="btn" onclick="appendToDisplay('-')">-</button>
        </div>
        <div>
            <button class="btn" onclick="appendToDisplay('1')">1</button>
            <button class="btn" onclick="appendToDisplay('2')">2</button>
            <button class="btn" onclick="appendToDisplay('3')">3</button>
            <button class="btn" onclick="appendToDisplay('*')">*</button>
        </div>
        <div>
            <button class="btn" onclick="appendToDisplay('0')">0</button>
            <button class="btn" onclick="calculateResult()">=</button>
            <button class="btn" onclick="appendToDisplay('.')">.</button>
            <button class="btn" onclick="appendToDisplay('/')">/</button>
        </div>
    </div>

    <script>
        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function calculateResult() {
            try {
                document.getElementById('display').value = eval(document.getElementById('display').value);
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }
    </script>
</body>
</html>
