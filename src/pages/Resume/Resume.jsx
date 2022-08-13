import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Resume = () => {
  const [resume, setResume] = useState({})
  function createMarkup() {
    return { __html: resume.resume};
  }

  useEffect(() => {
    axios('resume.jsonc').then((res) => setResume(res.data))
  }, [])

  return (
    <div dangerouslySetInnerHTML={createMarkup()}></div>
  );
};

export default Resume;