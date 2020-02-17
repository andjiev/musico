namespace Musico.Services.Profiles
{
    using AutoMapper;
    using Musico.DataContext.Entities;
    using SpotifyAPI.Web.Models;

    public class TrackProfile
        : Profile
    {
        public TrackProfile()
        {
            CreateMap<FullTrack, Track>();
            CreateMap<SimpleTrack, Track>();
        }
    }
}
