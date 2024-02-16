document.getElementById('generateBtn').addEventListener('click', function() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;,.?/';
    var password = '';
    for (var i = 0; i < 10; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    var outputDiv = document.getElementById('output');
    outputDiv.textContent = 'Random Password: ' + password;
    document.getElementById('copyBtn').style.display = 'block';
    document.getElementById('copyBtn').textContent = 'Copiar';
    document.getElementById('copyBtn').classList.remove('copiado');
});
  
document.getElementById('copyBtn').addEventListener('click', function() {
    var passwordText = document.getElementById('output').textContent.split(':')[1].trim();
    navigator.clipboard.writeText(passwordText)
      .then(() => {
        document.getElementById('copyBtn').textContent = 'Copiado';
        document.getElementById('copyBtn').classList.add('copiado');
        setTimeout(function() {
          document.getElementById('copyBtn').textContent = 'Copiar';
          document.getElementById('copyBtn').classList.remove('copiado');
        }, 3000); // 3 segundos
      })
      .catch(err => {
        console.error('No se pudo copiar la contraseña al portapapeles: ', err);
      });
});
  