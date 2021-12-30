const cal = {
    plus: function(a, b) {
        console.log(a + " + " + b + " = " + (a + b))
    },

    min: function(a, b) {
        console.log(a + " - " + b + " = " + (a - b))
    },

    mul: function(a, b) {
        console.log(a + " * " + b + " = " + (a * b))
    },

    div: function(a, b) {
        console.log(a + " / " + b + " = " + (a / b))
    }
}

cal.plus(10, 20)
cal.min(20, 50)
cal.mul(10, 36)
cal.div(68, 10)
