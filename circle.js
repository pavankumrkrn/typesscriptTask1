var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        var _this = this;
        this.getColor = function () { return _this.color; };
        this.setColor = function (color) { return _this.color = color; };
        this.getRadius = function () { return _this.radius; };
        this.setRadius = (function (radius) {
            _this.radius = radius;
            _this.area = radius * radius;
            _this.circumference = +(2 * (22 / 7) * radius).toFixed(2);
        });
        this.tostring = function () { return 'Radius ' + _this.radius + ' Color ' + _this.color + ' Area ' + _this.area + ' Circumference ' + _this.circumference; };
        this.getArea = function () { return _this.area; };
        this.getCircumference = function () { return _this.circumference; };
        this.radius = radius;
        this.color = color;
    }
    return Circle;
}());
var c = new Circle();
c.setColor('red');
c.setRadius(3);
console.log(c.tostring());
