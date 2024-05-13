import React, {Components} from 'react'

class RepetaCounter extends React.Component {
    hendleIncrement = (event) => {
        console.log("Збільшили на один")
        console.log(event)

        //event доступен лише у синхронному коді.
        //Якщо потрібно використовувати event в асинхронному коді - потрібно зберегти властивості його eventа
        // у локальну змінну. Наприклад:
        // const target = event.target
    }
    hendleDecrement = (event) => {
        console.log("Зменшили на один")
    }
    render() {
        return (
            <div>
                <span>0</span>
                <div>
                    <button type='button' onClick={this.hendleIncrement}>Збільшити на 1</button>
                    <button type='button' onClick={this.hendleDecrement}>Збільшити на 1</button>
                </div>
            </div>
        )
    }
}
export default RepetaCounter

