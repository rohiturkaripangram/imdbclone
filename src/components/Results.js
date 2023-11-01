import React from 'react';
import Card from "@/components/Card"
const Results = ({ results }) => {
  return (
    <div  className="sm:grid sm:grid-cols-2 lg:gird-cols-3 xl:grid-cols-3 2xl:grid-cols-5 max-w-6xl mx-auto py-2">
      {results && results.map((result) => 
       <Card key={results.id} result={result} />
      )}
    </div>
  );
};

export default Results;
