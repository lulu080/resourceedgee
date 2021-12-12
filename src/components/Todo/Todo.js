import React from 'react'
import Button from '../Button/Button'
import './Todo.css'

const Todo = ({ blue, text, buttonText }) => {
    return (
        <div className="todo">
            <div className="todo__left">
                <div className="todo__leftCircle" />
                <span>{text}</span>
            </div>
            <div className="todo__right">
                <Button className={blue ? 'todo__bluetext' : 'todo__graytext'}>
                    { buttonText }
                </Button>
            </div>
        </div>
    )
}

export default Todo
