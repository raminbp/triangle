/**
 * Author: Ramin Bakhshpour (ramin.bp @ gmail.com)
 */
describe('Triangle class tests', function () {

    var argLengthException = new Error('Triangle constructor must be called with 3 arguments'),
        argTypeException = new Error('Arguments type should be Number'),
        argRangeException = new Error('Arguments must be positive non-zero'),
        canNotFormTriangleException = new Error('Arguments can not form a triangle');

    it('expect Triangle to be defined', function () {
        expect(Triangle).toBeDefined();
    });


    describe('Triangle constructor test suit', function () {

        function TriangleConstructorWrapper() {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(Triangle);
            return new (Function.prototype.bind.apply(Triangle, args));
        }

        it('Constructor should throw exception if it is not called with exact 3 arguments', function () {
            expect(TriangleConstructorWrapper.bind(null, 1, 2, 3, 4, 5)).toThrow(argLengthException);
            expect(TriangleConstructorWrapper.bind(null, 1, 2)).toThrow(argLengthException);
            expect(TriangleConstructorWrapper.bind(null, 1, 2, 3)).not.toThrow(argLengthException);
        });

        it('Constructor should throw exception if it is called with any argument type except Number', function () {
            expect(TriangleConstructorWrapper.bind(null, 1, 2, '3')).toThrow(argTypeException);
            expect(TriangleConstructorWrapper.bind(null, 'w', 'a', 2)).toThrow(argTypeException);
        });

        it('Constructor should throw exception if it is called with a negative or zero arguments', function () {
            expect(TriangleConstructorWrapper.bind(null, 1, 2, -1)).toThrow(argRangeException);
            expect(TriangleConstructorWrapper.bind(null, 1, 2, 0)).toThrow(argRangeException);
        });

        it('Constructor should throw exception if arguments can not form a triangle based on Pythagorath', function () {
            expect(TriangleConstructorWrapper.bind(null, 1, 2, 3)).toThrow(canNotFormTriangleException);
            expect(TriangleConstructorWrapper.bind(null, 2, 2, 3)).not.toThrow(canNotFormTriangleException);
        });
    });


    describe('Triangle canFormTriangle(static) method test suite', function () {
        it('(1, 2, 3) can not form a triangle', function () {
            expect(Triangle.canFormTriangle(1, 2, 3)).toBe(false);
        });

        it('(2, 3, 4) can form a triangle', function () {
            expect(Triangle.canFormTriangle(2, 3, 4)).toBe(true);
        });

        it('(1.1, 1.2, 2) can form a triangle', function () {
            expect(Triangle.canFormTriangle(1.1, 1.2, 2)).toBe(true);
        });
    });


    describe('Triangle type detection suite', function () {

        it('triangle is isosceles if two of the arguments are equal', function () {
            expect(new Triangle(2, 2, 3).getType()).toEqual('isosceles');
            expect(new Triangle(1, 1, .9).getType()).toEqual('isosceles');
        });

        it('triangle is equilateral if all arguments are equal', function () {
            expect(new Triangle(2, 2, 2).getType()).toEqual('equilateral');
            expect(new Triangle(1.1, 1.1, 1.1).getType()).toEqual('equilateral');
        });

        it('triangle is scalene if all arguments are not equal', function () {
            expect(new Triangle(2, 3, 4).getType()).toEqual('scalene');
            expect(new Triangle(5.1, 6.2, 7.3).getType()).toEqual('scalene');
        });
    });
});