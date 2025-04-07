using System.Reflection;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.VisualStudio.TestPlatform.TestHost;
using TimeCapsuleX.Common.Infrastructure.Events.EventBus;
using TimeCapsuleX.Common.IntegrationTests;
using TimeCapsuleX.Common.IntegrationTests.Configuration;

namespace TimeCapsuleX.Common.Infrastructure.IntegrationTests.EventBus;

public sealed class InMemoryEventBusTests(
    TimeCapsuleXWebApplicationFactory<Program> applicationInMemoryFactory) : IClassFixture<
    TimeCapsuleXWebApplicationFactory<Program>>
{
    private WebApplicationFactory<Program> ApplicationInMemory => applicationInMemoryFactory
        .WithFakeConsumers(Assembly.GetExecutingAssembly());

    [Fact]
    internal async Task Given_valid_event_published_Then_event_should_be_consumed()
    {
        // Arrange
        var eventBus = GetEventBus();
        var fakeEvent = FakeEvent.Create();

        // Act
        await eventBus!.PublishAsync(fakeEvent, CancellationToken.None);

        // Assert
        fakeEvent.Consumed.Should().BeTrue();
    }

    private IEventBus GetEventBus() =>
        ApplicationInMemory.Services
            .CreateScope()
            .ServiceProvider
            .GetRequiredService<IEventBus>();
}
