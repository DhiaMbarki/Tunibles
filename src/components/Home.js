import React from 'react'
import './Home.css'
import Logo from './images/logo.png'
import image from './images/kamell.PNG'; 

export default function Home() {
  return (
<div className='move'>

<div >

<h1 id="showstop"> 
 TUNIBLESS</h1>
 <h1 id="showstop"> 
<img className='logo' src={Logo} alt="Logo" />
 </h1>
<div id="content" class="container">
<p className='p2'>
من نحن ؟
 
  </p>
  <p className='edit'> 
  نحن جمعية غير ربحية مسجلة في ألمانيا, وضعت لنفسها مهمة دعم
  العائالات والشباب التونسي لإدماجهم في المجتمع
  الألماني. تحث الجمعية الشباب علي تعلم
اللغة الألمانية و المشاركة في الأعمال التطوعية
اضافة الي تسهيل تواصله مع الشركات و
المؤسسات الموجودة بألمانيا, هدفنا هو تمهيد الطريق للإندماج الناجح
والمساهمة في التواصل الألماني التونسي. كما نوفر
فرصا للتدريب المهني للتواصل مع الشباب تساعده
على احداث تغير فكري و ثقافي حتى يفتح ابوابا
جديدة للمستقبل 
  </p>
  <p className='p2'>
  :تاريخ نشأتنا

  </p>
  نحن مزيج من مهندسين وتقنيين و إعالميين
وإخصائيين في علم الإجتماع وغيرهم 
 يعيشون ويعملون منذ
عقود داخل ألمانيا نريد تكريس خبراتنا لمساعدة
الآخرين على هذا التوجه 
 
  <p className='p2'>
  :المساعدة للإعتماد على النفس  
</p>
<p>
جمعيتنا تحمل شعار المساعدة لإلعتماد على النفس,
نساعد الأشخاص المؤهلين والملتزمين لبناء
مستقبلهم في ألمانيا و ندعمهم كجهة اتصال ووسيط
ونمدهم بالمعلومات اللازمة ونرشدهم إلى الطريق
الأنجع حسب خبراتنا وتجاربنا

</p>
  </div>
 
  <img className='kamel' src={image} alt="Logo" />
  <h1>كمال بن حميدة</h1>
  <h2 className='upp'>رئيس الجمعية

</h2>
<div class="button-container">

  <a href="https://690a9a10-6767-458e-9928-f6c8fc115802.filesusr.com/ugd/ea939d_51f407e620a74c6bad9333c9ab7be774.pdf">
    <button className='left-button'>تسجيل الجمعية
    
    </button>
</a>

         <a href="https://690a9a10-6767-458e-9928-f6c8fc115802.filesusr.com/ugd/ea939d_d21767626c66499fb6714afde2faa417.pdf">
    <button className='right-button'>القانون الأساسي</button>
</a>

</div>

<a href="https://www.facebook.com/TuniBless">

<button class="loginBtn loginBtn--facebook">
صفحتنا على الفايسبوك</button>
</a>

<h2 className='hhh' ><a className='hh' href="https://sites.google.com/view/ausbildungfuertunesier/">الإنخراط في الجمعية🔗</a></h2>

  </div>
  
    </div>
  )
}
