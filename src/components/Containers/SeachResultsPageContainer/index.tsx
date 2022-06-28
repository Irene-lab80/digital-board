import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GetSearchTerm from '../../../store/search/selector';
import SeachResultsPage from '../../Pages/SeachResultsPage';

const SeachResultsPageContainer = () => {
  const search = useSelector(GetSearchTerm);
  const navigate = useNavigate();
  useEffect(() => {
    if (search) {
      navigate('/search');
    }
  }, [search]);

  return <SeachResultsPage />;
};

export default SeachResultsPageContainer;
