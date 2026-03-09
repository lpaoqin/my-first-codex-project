const button = document.getElementById('helloBtn');
const message = document.getElementById('message');

button.addEventListener('click', function () {
  message.textContent = '很高兴认识你，欢迎来到我的主页！';
});
