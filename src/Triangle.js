/**
 * Author: Ramin Bakhshpour (ramin.bp @ gmail.com)
 */

(function (){

    /**
     *
     * @param _a
     * @param _b
     * @param _c
     * @constructor
     */
    function Triangle(_a, _b, _c) {
        /**
         *
         * @param a
         * @param b
         * @param c
         */
        function validateArguments(a, b, c) {
            var toString = Object.prototype.toString,
                type = '[object Number]';

            if (arguments.length !== 3) {
                throw new Error('Triangle constructor must be called with 3 arguments');
            }

            if (toString.call(a) !== type || toString.call(b) !== type || toString.call(c) !== type) {
                throw new Error('Arguments type should be Number');
            }

            if (a <= 0 || b <= 0 || c <= 0) {
                throw new Error('Arguments must be positive non-zero');
            }

            if (!Triangle.canFormTriangle(a, b, c)) {
                throw new Error('Arguments can not form a triangle');
            }
        }

        validateArguments.apply(this, arguments);

        this.getA = function () {
            return _a;
        };


        this.getB = function () {
            return _b;
        };

        this.getC = function () {
            return _c;
        };
        
    }

    /**
     *
     * @type {{EQUILATERAL: string, ISOSCELES: string, SCALENE: string}}
     */
    Triangle.triangleTypes = {
        EQUILATERAL: 'equilateral',
        ISOSCELES: 'isosceles',
        SCALENE: 'scalene'
    };

    /**
     *
     * @param a
     * @param b
     * @param c
     * @returns {boolean} returns true if @param a, @param b, @param c can form a triangle, otherwise return false
     */
    Triangle.canFormTriangle = function (a, b, c) {
        return a + b > c && a + c > b && b + c > a;
    };

    /**
     *
     * @returns {*}
     */
    Triangle.prototype.getType = function () {

        var triangleTypes = Triangle.triangleTypes,
            a = this.getA(),
            b = this.getB(),
            c = this.getC();

        if (a == b && b == c) {
            return triangleTypes.EQUILATERAL;
        } else if (a == b || b == c || a == c) {
            return triangleTypes.ISOSCELES;
        } else {
            return triangleTypes.SCALENE;
        }
    };

    window.Triangle = Triangle;
}());