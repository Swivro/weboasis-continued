        var c = document.getElementById("c");
        var ctx = c.getContext("2d");

        c.height = window.innerHeight;
        c.width = window.innerWidth;

        var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
        matrix = matrix.split("");

        var font_size = 10;
        var columns = c.width / font_size;
        var drops = [];
        for(var x = 0; x < columns; x++)
            drops[x] = 1; 

        function draw()
        {
            if ((c.height != window.innerHeight) || (c.width != window.innerWidth))
            {
                c.height = window.innerHeight;
                c.width = window.innerWidth;
                columns = c.width / font_size;
                if (columns > drops.length)
                {
                    var dl = drops.length;
                    for(var x = dl; x < columns; x++)
                        drops[x] = 1; 
                }
            }

            ctx.fillStyle = "rgba(0, 0, 0, 0.04)"; // 0.04
            ctx.fillRect(0, 0, c.width, c.height);

            ctx.fillStyle = "#2196F3"; // "#0077FF"; // "#1703fc"; // "#0364FF"; // "#0F0"; //green text
            ctx.font = font_size + "px arial";
            for( var i = 0; i < drops.length; i++ )
            {
                var text = matrix[ Math.floor( Math.random() * matrix.length ) ];
                ctx.fillText(text, i * font_size, drops[i] * font_size);
                if( drops[i] * font_size > c.height && Math.random() > 0.975 )
                    drops[i] = 0;

                drops[i]++;
            }
        }

        setInterval( draw, 35 );