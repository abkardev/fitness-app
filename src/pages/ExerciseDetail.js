import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Box} from '@mui/material';

import { exercisesOptions, fetchData, youtubeOptions} from '../utils/FetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMucleExercises, setTargetMucleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    const fetchExercisesData = async () => {
       const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
       const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
       const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,
       exercisesOptions);
       setExerciseDetail(exerciseDetailData);
       const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
       setExerciseVideos(exerciseVideosData.contents);
       const targetMucleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`);
       setTargetMucleExercises(targetMucleExercisesData);
       const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`);
       setEquipmentExercises(equipmentExercisesData);
    }
    fetchExercisesData();
  },[id])
    return (
        <Box>
         <Detail exerciseDetail={exerciseDetail}/>
         <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
         <SimilarExercises targetMucleExercises={targetMucleExercises}
           equipmentExercises={equipmentExercises}
         />
        </Box>

    )
}

export default ExerciseDetail;