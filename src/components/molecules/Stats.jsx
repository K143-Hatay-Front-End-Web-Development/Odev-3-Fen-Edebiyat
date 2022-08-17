const Stats = ({stats}) => {
  // console.log(stats)
  return (
  
    <ul className="stats">
      <li>Puan: {stats.point}</li>
      <li>Çözülen Sayısı: {stats.questions}</li>
      <li>Yanlış Cevap: {stats.wrongs}</li>
      <li>Doğru Cevap: {stats.corrects}</li>
    </ul>
  );
};

export default Stats;