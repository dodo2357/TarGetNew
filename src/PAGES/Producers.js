import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@material-ui/core';
const Producers = () => {
  return (
    <div>
        <Grid container spacing={3}>
            <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://migros-dali-storage-prod.global.ssl.fastly.net/tazedirekt/brand/list/10000000005449/ahmetokan-9ee0d9.png"
          alt="Ahmet Okan Çiftliği"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Ahmet Okan Çiftliği

          </Typography>
          <Typography variant="body2" color="text.secondary">
          Ahmet Okan'ın hikayesi 1963 yılında Arsuz’da başladı. Hatay’ın önemli bir ilçesi olan Arsuz, o tarihlerde kendi halinde küçük sakin bir belde idi. Ahmet Bey'in babası İsmet Okan, o yıllarda bir limon bahçesi yetiştirmek istediğinde bölgede narenciye tarımı hemen hemen yok gibiymiş ve daha çok tarla ziraati yapılırmış
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://migros-dali-storage-prod.global.ssl.fastly.net/tazedirekt/brand/list/10000000006808/neonappo_400x150pxl-40f906.jpg"
          alt="Neo Nappo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Neo Nappo

          </Typography>
          <Typography variant="body2" color="text.secondary">
          017 yılında New York'tan Türkiye'ye dönüş yaptıktan sonra Nappo markasını kuran Özgür Kılınçlar, 2019’da açılan İzmir restoranının ardından, 2020 yılında İstanbul Kanyon’da ikinci şubesini hizmete geçirdi. Bir markanın başarıya ulaşmasındaki en önemli etkenin işini sevmek
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
            </Grid>
            <Grid item xs={4}>
             <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://migros-dali-storage-prod.global.ssl.fastly.net/tazedirekt/brand/list/10000000005394/tire-4e4f32.jpg"
          alt="S.S. Tire Organik Gıda Kooperatifi"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          S.S. Tire Organik Gıda Kooperatifi
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Topraklarımızın bereketi, bilinçli üretimin sürekliliği için kooperatifleşmek ve kooperatiflere destek olmak yadsınamaz bir öneme sahip. Bu sebeplerdendir ki Tire Organik Gıda Ürünleri Kooperatifi ailemize katıldığı için çok mutluyuz.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://migros-dali-storage-prod.global.ssl.fastly.net/tazedirekt/brand/list/10000000005453/uaban-burhan-aiftli%C3%9Fi-karacabey-10-c64011.jpg"
          alt="Şaban Amcanın Çiftliği"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Şaban Amcanın Çiftliği
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Bahar tadında tazecik yeşilliklerimizin sırrını açıklıyoruz. Emekli olduktan sonra üretim yapmak için 2000 yılında organik sertifikalı tarım üzerine çalışan Şaban amcamız Bursa Karacabey'in çam ormanlarıyla çevrili verimli topraklarında, daha önce tarım yapılmayan 280 dönümlük bir arazide
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
            </Grid>
            <Grid item xs={4}>
             <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://migros-dali-storage-prod.global.ssl.fastly.net/tazedirekt/brand/list/10000000000128/acquapannalogo-392da4.jpg"
          alt="ACQUA PANNA"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ACQUA PANNA
          </Typography>
          <Typography variant="body2" color="text.secondary">
          İtalya'nın Toskana bölgesindeki Apennines dağlarından sofralarınıza gelen, özel kaynak suyu Acqua Panna, Tazedirekt'te! Mineralli kaynak suyu Acqua Panna, doğallığını kaybetmeden cam şişelere dolduruluyor
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={4}>

    
     <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://migros-dali-storage-prod.global.ssl.fastly.net/tazedirekt/brand/list/10000000006836/guney.adana.logo-24d3f2.jpg"
          alt="Güney Adana Kadın Kooperatifi"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Güney Adana Kadın Kooperatifi
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Güney Adana Kadın Girişimciler Tarımsal Kalkınma Kooperatifi 2018 yılında Güney Adana Kalkınma Projesi ile Adana Tarım İl Müdürlüğü, Çukurova Kalkınma Ajansı, Adana Büyükşehir Belediyesi ve Adana Valiliği ortaklığı ile hazırlanmış.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
            </Grid>

        </Grid>
    </div>
  )
}

export default Producers;