import * as _ from 'lodash'

class Startup {
    public static main(): number {
        const group = _.groupBy(['one', 'two', 'three'], 'length');

        let foo: string = 'hello';

        console.log('hello wolrd111', group);


        function multiply1(x: number, y: number): number {
            return x * y;
        }

        //함수표현식

        const multiply2 = (x: number, y: number): number => x * y;

        console.log(multiply1(10, 2));
        

        console.log(multiply1(10, 3));

        console.log(multiply2(true, 2));

        let isDone: boolean = true;

        let color: string = 'blue';
        color = 'red';

        let multipleColor: string = `hello, my name is ${isDone}`;
        console.log(multipleColor);




        return 0;
    }


}
Startup.main();


