import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ResumeCard from '../components/ResumeCard';
import { resumes } from '../constans';
import { usePuterStore } from '../puter'
import { useNavigate } from 'react-router-dom';
export default function Home() {


  const { auth } = usePuterStore();
  const navigate = useNavigate();

useEffect(()=>{
if(!auth.isAuthenticated) navigate( "/auth?next=/")
},[auth.isAuthenticated]);
  return (
    <main className='bg-[url("/images/bg.png")] bg-cover bg-center h-screen'>
      <Navbar />
         <section className="main-section">
    <div className=" page-heading">
        <h1>Track Your Resume: Smart Insights for the Modern Job Seeker</h1>
        <h2>Receive instant, AI-powered feedback on</h2>
    </div>
     {resumes.length>0&&(
    <div className='resumes-section' >
      {resumes.map((resume)=>(
        <ResumeCard key={resume.id} resume={resume}/>
      ))}
    </div>
   )}
   </section>
  
    </main>
  );
}
