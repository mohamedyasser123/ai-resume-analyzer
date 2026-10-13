import { useState, type FormEvent } from "react"
import Navbar from "../components/Navbar";
import FileUploader from "../components/FileUploader";

export default function Upload() {
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, isStatusText] = useState('');
    const [file, setFile] = useState<File | null>()
    const handelFileSlected = (file: File | null) => {
        setFile(file)
    }
    const handleSubmit = async (event: FormEvent) => {
            const form = event.currentTarget.closest("form");

        event.preventDefault();
        if (!form) return;
        
         const formData = new FormData(form);
    const companyName = formData.get("company-name") ;
    const jobTitle = formData.get("job-title") ;
    const jobDescription = formData.get("job-description");
    console.log(companyName,jobTitle,jobDescription,file);
    }

    return (
        <main className='bg-[url("/images/bg.png")] bg-cover '>
            <Navbar />
            <section className="main-section">
                <div className="page-heading py-16">
                    {isProcessing ? <>
                        <img src="/assets/images/resume-scan.gif" alt="resume scan" className="w-full" />
                        <p className="text-sm text-gray-500 mt-2">{statusText}</p>
                    </> : (
                        <h2>Drop Your Resume for an ATS score and improvement tips</h2>
                    )}
                    {!isProcessing && (
                        <form className="flex flex-col gap-4" id="upload-form" onSubmit={handleSubmit}>
                            <div className="form-div">
                                <label htmlFor="company-name">Company Name</label>
                                <input
                                    type="text"
                                    name="company-name"
                                    placeholder="Company Name"
                                    id="company-name"
                                />
                            </div>

                            <div className="form-div">
                                <label htmlFor="job-title">Job Title</label>
                                <input
                                    type="text"
                                    name="job-title"
                                    placeholder="Job Title"
                                    id="job-title"
                                />
                            </div>

                            <div className="form-div">
                                <label htmlFor="job-description">Job Description</label>
                                <textarea
                                    name="job-description"
                                    id="job-description"
                                    placeholder="Job Description"
                                    rows={5}
                                />
                            </div>

                            <div className="form-div">
                                <label htmlFor="job-description">Upload Resume</label>
                                <FileUploader onFileSelect={handelFileSlected} /> 
                            </div>
                            {file && (
                <button className="primary-button" type="submit">
                  Save & Analyze Resume
                </button>
              )}
                        </form>
                    )}
                </div>
            </section>
        </main>
    )
}