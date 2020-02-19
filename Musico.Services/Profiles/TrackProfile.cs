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
            CreateMap<FullTrack, Track>()
                .ForMember(x => x.Url, x => x.MapFrom(z => z.PreviewUrl));

            CreateMap<SimpleTrack, Track>()
                .ForMember(x => x.Url, x => x.MapFrom(z => z.PreviewUrl));
        }
    }
}
