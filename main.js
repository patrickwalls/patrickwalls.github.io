
/* ############### COURSES ############### */

var courses = {
  "courses": [
    {
      "id": "math210",
      "code": "MATH 210",
      "title": "Introduction to Mathematical Computing",
      "goals": [
        "Create computational narratives in <a href='https://jupyter.org'>Jupyter</a> notebooks with explanatory text written in <a href='https://en.wikipedia.org/wiki/Markdown'>markdown</a>, mathematical equations rendered with <a href='https://www.latex-project.org'>LaTeX</a> and computations executed by <a href='https://python.org'>Python</a> code",
        "Perform matrix computations with <a href='https://numpy.org'>NumPy</a>, create mathematical graphics with <a href='https://matplotlib.org'>Matplotlib</a> and implement mathematical algorithms with <a href='https://scipy.org/scipylib'>SciPy</a>",
        "Approximate solutions of non-linear equations",
        "Approximate definite integrals and estimate error",
        "Compute solutions of large linear systems of equation",
        "Approximate solutions of ordinary differential equations"
      ],
      "resources": [
        "<a href='docs/math210_outline_2023W2.pdf'>Course Outline 2023W2</a>",
        "<a href='https://patrickwalls.github.io/mathematicalpython'>Mathematical Python</a>",
        "Jupyter notebooks on <a href='https://ubc.syzygy.ca'>Syzygy</a>",
        "Lecture notes on <a href='https://github.com/ubc-math210'>GitHub</a>",
        "Lecture time and location: <a href='https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=MATH&course=210'>UBC Course Schedule</a>"
      ]
    },
    {
      "id": "math258",
      "code": "MATH 258",
      "title": "Differential Equations for Mechanical Engineering",
      "goals": [
        "Compute analytical solutions of first and second order differential equations",
        "Compute the Laplace transform of elementary functions and apply the tranform to differential equations",
        "Describe qualitative properties of non-linear systems of differential equations by graphical methods",
        "Create mathematical models of real-world phenomenon such as fluid mixing, friction, drag, vibrations and RLC circuits",
        "Approximate and visualize solutions of differential equations with <a href='https://www.mathworks.com/products/matlab.html'>MATLAB</a>"
      ],
      "resources": [
        "<a href='docs/math258_outline.pdf'>Course Outline</a>",
        "<a href='https://www.jirka.org/diffyqs/'>Notes on DiffyQs</a> by Jiri Lebl",
        "<a href='https://matlab.mathworks.com'>MATLAB Online</a>",
        "More information about <a href='https://mech.ubc.ca/undergraduate/mech-2/'>MECH 2</a>"
      ]
    },
    {
      "id": "math254",
      "code": "MATH 254",
      "title": "Multivariable and Vector Calculus for Mechanical Engineering",
      "goals": [
        "Compute double and triple integrals in cartesian, polar and spherical coordinates",
        "Compute partial derivatives of functions of several variables",
        "Find extreme values of functions of several variables",
        "Compute line and surface integrals of vector fields",
        "Summarize integral equations given by the Divergence Theorem, Stokes Theorem and the Fundamental Theorem of Line Integrals",
        "Create mathematical models of real-world phenomenon arising in fluid dynamics and thermodynamics",
        "Approximate definite integrals and visualize curves and surfaces in 3D with <a href='https://www.mathworks.com/products/matlab.html'>MATLAB</a>"
      ],
      "resources": [
        "<a href='docs/math254_outline.pdf'>Course Outline</a>",
        "<a href='http://www.apexcalculus.com'>APEX Calculus</a> by Gregory Hartman",
        "<a href='https://matlab.mathworks.com'>MATLAB Online</a>",
        "More information about <a href='https://mech.ubc.ca/undergraduate/mech-2/'>MECH 2</a>"
      ]
    },
    {
      "id": "math307",
      "code": "MATH 307",
      "title": "Applied Linear Algebra",
      "goals": [
        "Summarize properties and constructions of matrix decompositions LU, QR and SVD",
        "Perform matrix computations using mathematical software <a href='https://python.org'>Python</a>, <a href='https://scipy.org'>SciPy</a> and <a href='https://jupyter.org'>Jupyter</a>",
        "Compute solutions of large systems of linear equations using matrix decompositions",
        "Compute least squares approximations of large linear systems using matrix decompositions",
        "Compute eigenvalues of large matrices using iterative methods",
        "Analyze digital signals using the discrete Fourier transform",
        "Create mathematical models of real-world phenomenon such as computed tomography and digital signal processing"
      ],
      "resources": [
        "<a href='https://ubcmath.github.io/MATH307/'>MATH 307 Course Notes</a>",
        "<a href='docs/math307_outline_2022W1.pdf'>Course Outline 2022W1</a>",
        "Lecture time and location: <a href='https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=MATH&course=307'>UBC Course Schedule</a>"
      ]
    },
    {
      "id": "math441",
      "code": "MATH 441",
      "title": "Discrete Optimization Problems",
      "goals": [
        "Formulate well-defined optimization problems based on real-world phenomena",
        "Describe and contrast algorithms for solving optimization problems",
        "Describe and contrast the computational complexity of optimization problems",
        "Use mathematical software to compute solutions of optimization problems",
        "Communicate solutions of optimization problems to a general mathematical audience"
      ],
      "resources": [
        "<a href='docs/math441_outline_2023W2.pdf'>Course Outline 2023W2</a>",
        "<a href='docs/math441_project_2023W2.pdf'>Project Outline 2023W2</a>",
        "<a href='docs/math441_portfolio_2023W2.pdf'>Learning Portfolio Outline 2023W2</a>"
      ]
    }
  ]
};

var courseTemplate = document.getElementById('course-template').innerHTML;
var renderedCourseTemplate = Mustache.render(courseTemplate, courses);
document.getElementById('courses').innerHTML = renderedCourseTemplate;

var courseNavTemplate = document.getElementById('course-nav-template').innerHTML;
var renderedCourseNavTemplate = Mustache.render(courseNavTemplate, courses);
document.getElementById('nav-courses').innerHTML = renderedCourseNavTemplate;

/* ############### PROJECTS ############### */

var projects = {
  "projects": [
    {
      "id": "mathpython",
      "title": "Mathematical Python",
      "description": `
        <a href='https://patrickwalls.github.io/mathematicalpython'>Mathematical Python</a> is a web-based open textbook on mathematical computing with Python, SciPy and Jupyter. The book consists of 25+ Jupyter notebooks covering markdown and LaTeX, basic Python programming, NumPy, SciPy and matplotlib, optimization, numerical integration, linear systems equations, eigenvalues and eigenvectors, and ordinary differential equations.`,
      "resources": [
        "<a href='https://patrickwalls.github.io/mathematicalpython'>Mathematical Python</a>",
        "Jupyter notebooks on <a href='https://github.com/patrickwalls/mathematicalpython'>GitHub</a>"
      ]
    },
    {
      "id": "mbgrader",
      "title": "mbgrader",
      "description": `
        mbgrader (<strong>m</strong>ath <strong>b</strong>atch <strong>grader</strong>) is a custom web application for batch grading MATLAB assignments. The application is built with Python and Flask, SQLite and BackboneJS, and is used to grade assignments for MATH 152, MATH 221 and MATH 215/255 at UBC which total over 3000 students per year. In MATH 152 alone there are over 800 students and 6 MATLAB assignments and each assignment takes about 24 hours to assess when assignments are graded manually one at a time. With mbgrader, the same assignments can be graded in 2 hours. mbgrader also allows graders to provide thoughtful, individualized feedback to students since all responses are reduced to a small number of batches per question.
        `,
      "resources": [
        "<a href='https://github.com/patrickwalls/mbgrader'>GitHub repository</a>"
      ]
    },
    {
      "id": "coursemap",
      "title": "Course Map",
      "description": `
        A data visualization of the undergraduate mathematics program at UBC built with <a href='https://d3js.org'>D3</a>.
        `,
      "resources": [
        "<a href='https://ubcmath.github.io/coursemap'>Course Map</a>"
      ]
    },


    {
      "id": "jupyterdays",
      "title": "JupyterDays",
      "description": `
        <a href='https://jupyter.org'>Jupyter</a> notebook is a web application for producing computational narratives: a notebook in the browser which runs code and renders text, mathematical notation, images and videos. Jupyter notebook is a powerful open source tool for scientific computing, reproducible research and teaching data science. JupyterDays is an opportunity for instructors, researchers and students at UBC to share their Jupyter experiences and to learn about new Jupyter tools.
        `,
      "resources": [
        "<a href='https://ubc-dsci.github.io/jupyterdays'>UBC JupyterDays 2020</a>",
        "<a href='https://github.com/patrickwalls/jupyterday2019'>UBC JupyterDay 2019</a>",
        "<a href='https://github.com/patrickwalls/jupyterday2018'>UBC JupyterDay 2018</a>",
      ]
    },
    {
      "id": "ubcs3",
      "title": "UBCS3",
      "description": `
        UBC Scientific Software Seminar (UBCS3) aims to help students, fellows and faculty develop software skills for science.
        `,
      "resources": [
        "<a href='https://github.com/ubcs3/2018-Fall'>Software Projects</a>, Fall 2018",
        "<a href='https://github.com/ubcs3/2018-Winter-OSS'>Open Source Software</a>, Winter 2018",
        "<a href='https://github.com/ubcs3/2017-Fall-Mini-Hackathon'>Kaggle Competition Mini Hackathon<a/>, Fall 2017",
        "<a href='https://github.com/ubcs3/2017-Fall'>Practical Data Science</a>, Fall 2017",
        "<a href='https://github.com/ubcs3/2017-Summer'>Practical Deep Learning</a>, Summer 2017",
        "<a href='https://github.com/ubcs3/2017-Winter'>Neural Networks and Deep Learning in Python</a>, Winter 2017",
        "<a href='https://github.com/ubcs3/2016-Fall'>Machine Learning in Python with scikit-learn</a>, Fall 2016",
        "<a href='https://github.com/ubcs3/2016-Summer'>Collaborative Scientific Computing in Python</a>, Summer 2016"
      ]
    }
  ]
};

var projectTemplate = document.getElementById('project-template').innerHTML;
var renderedProjectTemplate = Mustache.render(projectTemplate, projects);
document.getElementById('projects').innerHTML = renderedProjectTemplate;

var projectNavTemplate = document.getElementById('project-nav-template').innerHTML;
var renderedProjectNavTemplate = Mustache.render(projectNavTemplate, projects);
document.getElementById('nav-projects').innerHTML = renderedProjectNavTemplate;
