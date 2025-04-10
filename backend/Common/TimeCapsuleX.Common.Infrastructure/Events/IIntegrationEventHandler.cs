﻿using MediatR;

namespace TimeCapsuleX.Common.Infrastructure.Events;

public interface IIntegrationEventHandler<in TEvent> : INotificationHandler<TEvent> where TEvent : IIntegrationEvent
{
}
