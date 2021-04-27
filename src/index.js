import './style.css';
import TestImage from '../asset/image.jpg';
import PrintHelloWorld from './print';

/**
 * @return {HTMLDivElement}
 */
function component() {
  const element = document.createElement('div');

  // 将按钮添加到我们已经存在的 div 中。
  const btn = document.createElement('button');
  btn.innerHTML = 'Button';
  btn.onclick = PrintHelloWorld;
  element.appendChild(btn);

  // 测试字体1
  const testFont1 = document.createElement('p');
  testFont1.innerHTML = 'Demo1 Of Test Font, you can see the change';
  testFont1.classList.add('font1');
  element.appendChild(testFont1);

  // 测试字体2
  const testFont2 = document.createElement('p');
  testFont2.innerHTML = 'Demo2 Of Test Font, you can see the change';
  testFont2.classList.add('font2');
  element.appendChild(testFont2);

  // 测试字体3
  const testFont3 = document.createElement('p');
  testFont3.innerHTML = 'Demo3 Of Test Font,you can see the change';
  element.appendChild(testFont3);

  // 将图像添加到我们已经存在的 div 中。
  const myImage = new Image();
  myImage.src = TestImage;
  myImage.height = 100;
  element.appendChild(myImage);
  return element;
}

document.body.appendChild(component());
