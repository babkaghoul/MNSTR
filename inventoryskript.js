<!DOCTYPE html>
<html>
<head>
  <title>Моя игра</title>
</head>
<body>
  <h1>Добро пожаловать в мою игру!</h1>
  
  <button id="inventoryButton">Инвентарь</button>

  <script>
    document.getElementById("inventoryButton").addEventListener("click", function() {
      window.location.href = "inventory.html"; // Переход на другую страницу с инвентарем
    });
  </script>
</body>
</html>