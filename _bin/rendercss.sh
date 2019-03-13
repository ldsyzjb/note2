


ROOT=`pwd`
SOURCE=${ROOT}/css/style-sass/
DESTINATION=${ROOT}/css/style
rm ${DESTINATION}/*

ks=`ls $SOURCE`
for var in $ks
do 
    echo $var
    ./node_modules/.bin/node-sass ${SOURCE}/$var ${DESTINATION}/${var/scss/css}
done
