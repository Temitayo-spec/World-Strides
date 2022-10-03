// const CustomMarker = () => {
//     return (
//       <div
//         className={classes.markerContainer}
//         lat={Number(place?.latitude) as number}
//         lng={Number(place?.longitude) as number}
//         key={i}
//       >
//         {!isMobile ? (
//           <LocationOnOutlinedIcon color="primary" fontSize="large" />
//         ) : (
//           <Paper elevation={3} className={classes.paper}>
//             <Typography className={classes.typography} variant="subtitle1">
//               {place.name}
//             </Typography>
//             <img
//               className={classes.pointer}
//               src={
//                 place?.photo
//                   ? place.photo.images.large.url
//                   : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
//               }
//               alt={place?.name as any}
//               height={100}
//               width={100}
//             />
//             <Rating
//               size="small"
//               value={Number(place.rating)}
//               color="primary"
//               readOnly
//             />
//           </Paper>
//         )}
//       </div>
//     );
// }
 
// export default CustomMarker;