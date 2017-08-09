*************************************************************************
* Este script gera um arquivo texto
* 
*********************************************************************************
'reinit'

*
* Primeiro abra o arquivo com os dados fonte
*

'open SA.daily.prcp.le.b01011978.e12312007.ctl'

*
* Depois defina o nome do arquivo onde serao gravados os 
* dados no formato texto (ascii)
*

outfile = 'chuva_70mm.txt'


*
* A seguir tem que definir suas variaveis, tempo, latitude, longitude
*
* No exempo abaixo, j define o tempo e latitude e a longitude são definidos
* para um único ponto da grade
*
*

j = 1

while ( j <= 10957)
  'set t 'j
  'set lat -27'
  'set lon -55'
  'q time'
*
* quando voce dah um "q time", ele vai escrever na tela uma sequencia de caracteres
* mais ou menos assim
* "Time = 00Z01JAN1979 to 00Z01JAN1979 sun to sun"
* que serão "capturados" pelos seguintes comandos:
*
   time=subwrd(result,3)
*
* o "subwrd" vai pegar a "palavra" inteira da posicao 3, ou seja, ele vai guardar
* a palavra "00Z01JAN1979"
*
   time=substr(time,4,9)
*
* esse comando vai pegar parte da "palavra" lida antes, ou seja, vai pegar 9 caracteres
* a partir da da posicao 4, lendo "01JAN1979"
*
   dia=substr(time,1,2)
*
* esse comando vai pegar as duas primeiras letras da palavra   "01JAN1979"
* e guardar na variavel "dia"

   mes=substr(time,3,3)

*
* esse comando vai os tres caracteres a partir do terceiro da palavra   "01JAN1979"
* e guardar na variavel "mes"
*  
   ano=substr(time,6,4)
*
* esse comando vai os quatro caracteres a partir da sexta posicao da palavra   "01JAN1979"
* e guardar na variavel "ano"
*  
  
    'd p'
*
* com o "d p" o grads escreve na tela o valor da variavel para a posicao definida pela
* latitude, longitude e tempo. Esse valor será guardado na variável "res1" pelo comando seguinte:
*
    res1=subwrd(result,4)
* 
* A seguir o dado será gravado no arquivo conforme a sequencia abaixo
*
   code=write(''outfile,dia '  ' mes '  ' ano '   ' res1  '')

j=j+1
endwhile

say '*** data is written to 'outfile' ***'

