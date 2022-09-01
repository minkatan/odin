# odin-recipes

## Hanoi Tower
`
    function Hanoi(stack, source, dest, extra){
        if(stack === 1){
            transfer stack from source to dest
        }else {
            Hanoi (stack(n-1), source, extra, dest)
            transfer ring n from source to dest
            Hanoi (stack(n-1), extra, dest, source)
        }
    }

`