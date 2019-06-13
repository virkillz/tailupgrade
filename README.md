# Tailupgrade

Small utility to convert .html files with tailwind prior to v 1.0.4 class name into compatible with version 1.0.4

Tailwind CSS is very handy framework to write CSS in a fast and manageable way, with very small footprint and doesn't impose any design decision. So many component are available and shared accross internet. However with the recent upgrade to stable version, many component need to be modified. 

This small tool is simple converter to replace all your tailwind html file into compatible with version 1.0.4.


Usage:
``` tailupgrade <path> ```

Give directory containing html files as argument, it will convert all class name and save it under 'output' folder in the same directory. 
