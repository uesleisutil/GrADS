** Script para fazer a média mensal da TSM no GrADS. Feito em 11/10/12

'reinit'

** Define o tempo de início e fim de cada mes dentro do 
** arquivo diario 
di.1=1
df.1=31
di.2=32
df.2=59
di.3=60
df.3=90
di.4=91
df.4=120
di.5=121
df.5=151
di.6=152
df.6=181
di.7=182
df.7=212
di.8=213
df.8=243
di.9=244
df.9=273
di.10=274
df.10=304
di.11=305
df.11=334
di.12=335
df.12=364

** define a variavel mes.i para cada mes do ano
mes.1=jan
mes.2=fev
mes.3=mar
mes.4=abr
mes.5=mai
mes.6=jun
mes.7=jul
mes.8=ago
mes.9=set
mes.10=out
mes.11=nov
mes.12=dez


***inicializa o contador a partir do primeiro ano de dados
*** no caso aqui, o ano de inicio é 1982

ano=1982

while(ano<=2011)


**** a seguir abre o arquivo *.nc  *****

'sdfopen C:\OpenGrADS\Contents\Resources\SampleDatasets\sst.'ano'.nc'

'set mpdset hires'
'set lat -34 -24'
'set lon -54 -48'

** no if seguinte eh feita a comparacao para ver se o 
** ano é bissexto, se for, o numero de dias aumenta para
** 366

if(ano=1984|ano=1988|ano=1992|ano=1996|ano=2000|ano=2004|ano=2008|ano=2012)
  di.1=1
  df.1=31
  di.2=32
  df.2=60 
  di.3=61
  df.3=91
  di.4=92
  df.4=121
  di.5=122
  df.5=152
  di.6=153
  df.6=182
  di.7=183
  df.7=213
  di.8=214
  df.8=244
  di.9=245
  df.9=274
  di.10=275
  df.10=305
  di.11=306
  df.11=335
  di.12=336
  df.12=365
endif


**...inicializa o contador i que vai variar de 1 a 12 meses

i=1


** a função while faz a operacao de contagem e comparacao, no
** caso, vai executar a lista de comandos abaixo até que o
** valor seja menor ou igual a 12 

while(i<=12)


**** o comando say escreve na tela

say 'ano= 'ano

'set t 1'

'set mpdset hires'

*** o comando seguinte cria a media do mes.i para a variavel
*** sst

'define 'mes.i''ano'=ave(sst,t='di.i',t='df.i')'

*pull n
'c'
i=i+1
endwhile
'close 1'
ano=ano+1

endwhile

*** a seguir é calculada a media climatologica, ou seja, a 
*** media do mes para o periodo de dados disponiveis

'define jan1 = ((jan1982+jan1983+jan1984+jan1985+jan1986+jan1987+jan1988+jan1989+jan1990+jan1991+jan1992+jan1993+jan1994+jan1995+jan1996+jan1997+jan1998+jan1999+jan2000+jan2001+jan2002+jan2003+jan2004+jan2005+jan2006+jan2007+jan2008+jan2009+jan2010+jan2011)/30)'

'define fev1 = ((fev1982+fev1983+fev1984+fev1985+fev1986+fev1987+fev1988+fev1989+fev1990+fev1991+fev1992+fev1993+fev1994+fev1995+fev1996+fev1997+fev1998+fev1999+fev2000+fev2001+fev2002+fev2003+fev2004+fev2005+fev2006+fev2007+fev2008+fev2009+fev2010+fev2011)/30)'

'define mar1 = ((mar1982+mar1983+mar1984+mar1985+mar1986+mar1987+mar1988+mar1989+mar1990+mar1991+mar1992+mar1993+mar1994+mar1995+mar1996+mar1997+mar1998+mar1999+mar2000+mar2001+mar2002+mar2003+mar2004+mar2005+mar2006+mar2007+mar2008+mar2009+mar2010+mar2011)/30)'

'define abr1 = ((abr1982+abr1983+abr1984+abr1985+abr1986+abr1987+abr1988+abr1989+abr1990+abr1991+abr1992+abr1993+abr1994+abr1995+abr1996+abr1997+abr1998+abr1999+abr2000+abr2001+abr2002+abr2003+abr2004+abr2005+abr2006+abr2007+abr2008+abr2009+abr2010+abr2011)/30)'

'define mai1 = ((mai1982+mai1983+mai1984+mai1985+mai1986+mai1987+mai1988+mai1989+mai1990+mai1991+mai1992+mai1993+mai1994+mai1995+mai1996+mai1997+mai1998+mai1999+mai2000+mai2001+mai2002+mai2003+mai2004+mai2005+mai2006+mai2007+mai2008+mai2009+mai2010+mai2011)/30)'

'define jun1 = ((jun1982+jun1983+jun1984+jun1985+jun1986+jun1987+jun1988+jun1989+jun1990+jun1991+jun1992+jun1993+jun1994+jun1995+jun1996+jun1997+jun1998+jun1999+jun2000+jun2001+jun2002+jun2003+jun2004+jun2005+jun2006+jun2007+jun2008+jun2009+jun2010+jun2011)/30)'

'define jul1 = ((jul1982+jul1983+jul1984+jul1985+jul1986+jul1987+jul1988+jul1989+jul1990+jul1991+jul1992+jul1993+jul1994+jul1995+jul1996+jul1997+jul1998+jul1999+jul2000+jul2001+jul2002+jul2003+jul2004+jul2005+jul2006+jul2007+jul2008+jul2009+jul2010+jul2011)/30)'

'define ago1 = ((ago1982+ago1983+ago1984+ago1985+ago1986+ago1987+ago1988+ago1989+ago1990+ago1991+ago1992+ago1993+ago1994+ago1995+ago1996+ago1997+ago1998+ago1999+ago2000+ago2001+ago2002+ago2003+ago2004+ago2005+ago2006+ago2007+ago2008+ago2009+ago2010+ago2011)/30)'

'define set1 = ((set1982+set1983+set1984+set1985+set1986+set1987+set1988+set1989+set1990+set1991+set1992+set1993+set1994+set1995+set1996+set1997+set1998+set1999+set2000+set2001+set2002+set2003+set2004+set2005+set2006+set2007+set2008+set2009+set2010+set2011)/30)'

'define out1 = ((out1982+out1983+out1984+out1985+out1986+out1987+out1988+out1989+out1990+out1991+out1992+out1993+out1994+out1995+out1996+out1997+out1998+out1999+out2000+out2001+out2002+out2003+out2004+out2005+out2006+out2007+out2008+out2009+out2010+out2011)/30)'

'define nov1 = ((nov1982+nov1983+nov1984+nov1985+nov1986+nov1987+nov1988+nov1989+nov1990+nov1991+nov1992+nov1993+nov1994+nov1995+nov1996+nov1997+nov1998+nov1999+nov2000+nov2001+nov2002+nov2003+nov2004+nov2005+nov2006+nov2007+nov2008+nov2009+nov2010+nov2011)/30)'

'define dez1 = ((dez1982+dez1983+dez1984+dez1985+dez1986+dez1987+dez1988+dez1989+dez1990+dez1991+dez1992+dez1993+dez1994+dez1995+dez1996+dez1997+dez1998+dez1999+dez2000+dez2001+dez2002+dez2003+dez2004+dez2005+dez2006+dez2007+dez2008+dez2009+dez2010+dez2011)/30)'

'set mpdset hires'
'set lat -34 -24'
'set lon -54 -48'

'set gxout shaded'
'set cint 0.5'
'd jan1'
'set gxout contour'
'set cint 0.5'
'd jan1'

'printim C:\OpenGrADS\Contents\Resources\tsm_jan1.png white'

'set mpdset hires'
'set lat -34 -24'
'set lon -54 -48'

'set gxout shaded'
'set cint 0.5'
'd fev1'
'set gxout contour'
'set cint 0.5'
'd fev1'

'printim C:\OpenGrADS\Contents\Resources\tsm_fev1.png white'

'set gxout shaded'
'set cint 0.5'
'd mar1'
'set gxout contour'
'set cint 0.5'
'd mar1'

'printim C:\OpenGrADS\Contents\Resources\tsm_mar1.png white'

'set mpdset hires'
'set lat -34 -24'
'set lon -54 -48'

'set gxout shaded'
'set cint 0.5'
'd abr1'
'set gxout contour'
'set cint 0.5'
'd abr1'

'printim C:\OpenGrADS\Contents\Resources\tsm_abr1.png white'

'set mpdset hires'
'set lat -34 -24'
'set lon -54 -48'

'set gxout shaded'
'set cint 0.5'
'd mai1'
'set gxout contour'
'set cint 0.5'
'd mai1'

'printim C:\OpenGrADS\Contents\Resources\tsm_mai1.png white'

'set mpdset hires'
'set lat -34 -24'
'set lon -54 -48'

'set gxout shaded'
'set cint 0.5'
'd jun1'
'set gxout contour'
'set cint 0.5'
'd jun1'

'printim C:\OpenGrADS\Contents\Resources\tsm_jun1.png white'

'set mpdset hires'
'set lat -34 -24'
'set lon -54 -48'

'set gxout shaded'
'set cint 0.5'
'd jul1'
'set gxout contour'
'set cint 0.5'
'd jul1'

'printim C:\OpenGrADS\Contents\Resources\tsm_jul1.png white'

'set mpdset hires'
'set lat -34 -24'
'set lon -54 -48'

'set gxout shaded'
'set cint 0.5'
'd ago1'
'set gxout contour'
'set cint 0.5'
'd ago1'

'printim C:\OpenGrADS\Contents\Resources\tsm_ago1.png white'

'set mpdset hires'
'set lat -34 -24'
'set lon -54 -48'

'set gxout shaded'
'set cint 0.5'
'd set1'
'set gxout contour'
'set cint 0.5'
'd set1'

'printim C:\OpenGrADS\Contents\Resources\tsm_set1.png white'

'set mpdset hires'
'set lat -34 -24'
'set lon -54 -48'

'set gxout shaded'
'set cint 0.5'
'd out1'
'set gxout contour'
'set cint 0.5'
'd out1'

'printim C:\OpenGrADS\Contents\Resources\tsm_out1.png white'

'set mpdset hires'
'set lat -34 -24'
'set lon -54 -48'

'set gxout shaded'
'set cint 0.5'
'd nov1'
'set gxout contour'
'set cint 0.5'
'd nov1'

'printim C:\OpenGrADS\Contents\Resources\tsm_nov1.png white'

'set mpdset hires'
'set lat -34 -24'
'set lon -54 -48'

'set gxout shaded'
'set cint 0.5'
'd dez1'
'set gxout contour'
'set cint 0.5'
'd dez1'

'printim C:\OpenGrADS\Contents\Resources\tsm_dez1.png white'

'c'

