import React, { useState } from 'react';
import './TaskModal.css';
import {Task} from '../../types/index';
import {TaskModalProps} from '../../types/taskModal';


const TaskModal: React.FC<TaskModalProps> = ({ onClose, onSave, task }) => {
  const [name, setName] = useState(task?.name || '');
  const [status, setStatus] = useState(task?.status || 'Новая');
  const [date, setDate] = useState(task?.date || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(task){
        onSave({ id: task.id, name, status, date });
    } else{
        const id=1;
        let task: Task = { id, name, status, date };
        onSave(task);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{task ? 'Редактировать задачу' : 'Добавить задачу'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Название задачи:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Статус:
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Новая">Новая</option>
              <option value="В работе">В работе</option>
              <option value="Завершена">Завершена</option>
            </select>
          </label>
          <label>
            Дата:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <button type="submit">Сохранить</button>
          <button type="button" onClick={onClose}>
            Отмена
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
