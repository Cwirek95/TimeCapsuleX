﻿using System.Reflection;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Time.Testing;
using TimeCapsuleX.Common.Infrastructure.Events.EventBus;
using TimeCapsuleX.Common.Infrastructure.Mediator;
using TimeCapsuleX.Common.IntegrationTests.Database;

namespace TimeCapsuleX.Common.IntegrationTests.Configuration;

public static class ConfigurationExtensions
{
    public static WebApplicationFactory<T> WithContainerDatabaseConfigured<T>(
        this WebApplicationFactory<T> webApplicationFactory, IDatabaseConfiguration databaseConfiguration)
        where T : class => webApplicationFactory.UseSettings(databaseConfiguration.Get());

    private static WebApplicationFactory<T> UseSettings<T>(
        this WebApplicationFactory<T> webApplicationFactory,
        Dictionary<string, string?> settings)
        where T : class =>
        webApplicationFactory.WithWebHostBuilder(webHostBuilder =>
        {
            foreach (var setting in settings)
            {
                webHostBuilder.UseSetting(setting.Key, setting.Value);
            }
        });

    public static WebApplicationFactory<T> SetFakeSystemClock<T>(
        this WebApplicationFactory<T> webApplicationFactory,
        DateTimeOffset fakeDateTimeOffset)
        where T : class =>
        webApplicationFactory.WithWebHostBuilder(webHostBuilder =>
            webHostBuilder.ConfigureTestServices(services =>
                services.AddSingleton<TimeProvider>(new FakeTimeProvider(fakeDateTimeOffset))));

    public static WebApplicationFactory<T> WithFakeEventBus<T>(
        this WebApplicationFactory<T> webApplicationFactory,
        IEventBus eventBusMock)
        where T : class =>
        webApplicationFactory.WithWebHostBuilder(webHostBuilder =>
            webHostBuilder.ConfigureTestServices(services =>
                services.AddSingleton(eventBusMock)));

    public static WebApplicationFactory<T> WithFakeConsumers<T>(
        this WebApplicationFactory<T> webApplicationFactory,
        Assembly executingAssembly)
        where T : class =>
        webApplicationFactory.WithWebHostBuilder(webHostBuilder =>
            webHostBuilder.ConfigureTestServices(services =>
                services.AddMediator(executingAssembly)));
}
