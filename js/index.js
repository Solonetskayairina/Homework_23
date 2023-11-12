    class SuperMath {
        check(obj) {
            const {x, y, znak} = obj;

            const validOperators = ["+", "-", "*", "/", "%"];
            if ( !validOperators.includes(znak)) {
                this.input(obj);
                return;
            }

            let userConfirmation;
            do{
            userConfirmation = prompt(`Do you want to perform an action ${x} ${znak} ${y}? (yes/no)`);
            } while (userConfirmation === null || !userConfirmation) {

            userConfirmation.toLowerCase() === "yes"
                ? console.log(`Result of the operation ${x} ${znak} ${y} = ${this.calculate(x, y, znak)}`)
                : this.input(obj);
            }
        }

        calculate(x, y, znak) {

            switch (znak) {
                case '+':
                    return x + y;
                case '-':
                    return x - y;
                case '/':
                    if (y !== 0) {
                        return x / y;
                    }
                case '*':
                    return x * y;
                case '%':
                    return x % y;
                default:
                    this.input();
            }
        }

        input() {

            let newX, newY, newZnak;

            do{
                newX = +prompt('Enter new value x:');
            } while (isNaN(newX) || !newX )

            do{
                newY = +prompt('Enter new value y:');
            } while (isNaN(newY) || !newY )

            do{
                newZnak = prompt('Enter a new sign (+, -, *, /, %):');
            } while ( !["+", "-", "*", "/", "%"].includes(newZnak) )

            this.check({ x: newX, y: newY, znak: newZnak });
        }
    }

    const p = new SuperMath();
    const obj = { x: 12, y: 3, znak: "/" };
    p.check(obj);