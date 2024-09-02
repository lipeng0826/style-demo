import React, { useEffect, useState } from 'react';
import './index.less';
const TuoZhuai = (props) => {
  useEffect(() => {
    const items = document.querySelectorAll('.draggable-item');

    items.forEach((item) => {
      item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
      });

      item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
      });
    });

    const list = document.querySelector('.draggable-list');

    list.addEventListener('dragover', (e) => {
      e.preventDefault();
      const draggingItem = document.querySelector('.dragging');
      const afterElement = getDragAfterElement(list, e.clientY);
      if (afterElement == null) {
        list.appendChild(draggingItem);
      } else {
        list.insertBefore(draggingItem, afterElement);
      }
    });

    function getDragAfterElement(container, y) {
      const draggableElements = [...container.querySelectorAll('.draggable-item:not(.dragging)')];

      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY },
      ).element;
    }
  }, []);

  return (
    <div id="TuoZhuai">
      <div className="draggable-list">
        <div className="draggable-item" draggable="true">
          Item 1
        </div>
        <div className="draggable-item" draggable="true">
          Item 2
        </div>
        <div className="draggable-item" draggable="true">
          Item 3
        </div>
        <div className="draggable-item" draggable="true">
          Item 4
        </div>
      </div>
    </div>
  );
};

export default TuoZhuai;
