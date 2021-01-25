class Circle {
    private radius: number;
    private color: string;
    private area : number;
    private circumference : number;
    
    constructor(radius?:number, color?:string){
        this.radius = radius;
        this.color = color;
    }

    getColor = () => this.color;
    setColor = (color:string) => this.color = color;

    getRadius = () => this.radius;
    setRadius = ((radius:number) => {
        this.radius = radius;
        this.area = radius * radius;
        this.circumference = +(2*(22/7)*radius).toFixed(2);})

    tostring = () => 'Radius '+this.radius+' Color '+this.color+' Area '+this.area+' Circumference '+this.circumference;

    getArea = () => this.area;

    getCircumference = () => this.circumference;
}

let c = new Circle();
c.setColor('red');
c.setRadius(3)
console.log(c.tostring());

