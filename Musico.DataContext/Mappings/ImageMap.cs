namespace Musico.DataContext.Mappings
{
    using GraphQL.Types;
    using Musico.DataContext.Entities;

    public class ImageMap
        : ObjectGraphType<Image>
    {
        public ImageMap()
        {
            Name = "Image";

            Field(x => x.Url).Description("The URL of the Image");
            Field(x => x.Width).Description("The width of the Image");
            Field(x => x.Height).Description("The height of the Image");
        }
    }
}
