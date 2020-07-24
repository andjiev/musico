#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
WORKDIR /src
COPY ["Musico.Web/Musico.Web.csproj", "Musico.Web/"]
COPY ["Musico.Services/Musico.Services.csproj", "Musico.Services/"]
COPY ["Musico.DataContext/Musico.DataContext.csproj", "Musico.DataContext/"]
RUN dotnet restore "Musico.Web/Musico.Web.csproj"
COPY . .
WORKDIR "/src/Musico.Web"
RUN dotnet build "Musico.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Musico.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# ENTRYPOINT ["dotnet", "Musico.Web.dll"]

# heroku uses the following
CMD ASPNETCORE_URLS=http://*:$PORT dotnet EasyFind.API.dll
