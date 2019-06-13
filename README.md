# Tailupgrade

Small utility to convert .html files with tailwind v.0.x class name into compatible with version v.1.0

[Tailwind CSS](https://tailwindcss.com) is very handy framework to write CSS in a fast and manageable way, with very small footprint and doesn't impose any design decision. So many component are available and shared accross internet. Including [Tailwindcomponent](https://tailwindcomponents.com/) However with the recent upgrade to stable version, many component need to be modified. 

This small tool is simple converter to replace all your tailwind html file into compatible with v 1.x following [Tailwind upgrade guide](https://tailwindcss.com/docs/upgrading-to-v1)


Usage:

``` npm install -g tailupgrade ```


``` tailupgrade <path> ```

Give directory containing html files as argument, it will convert all class name and save it under 'output' folder in the same directory. 
