#Usage: ./downloadMail.sh mail outputFile

wget "http://chxo.com/labelgen/labelgen.php?textval=$1&font=ARIAL.TTF&size=12&bgcolor=%23ffffff&textcolor=%23000000&submit=create+image" -O "$2"